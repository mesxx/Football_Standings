import React, { createContext, useState } from "react";

export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      name: "Club 1",
      city: "City 1",
      ma: 0,
      me: 0,
      s: 0,
      k: 0,
      gm: 0,
      gk: 0,
      point: 0,
    },
    {
      name: "Club 2",
      city: "City 2",
      ma: 0,
      me: 0,
      s: 0,
      k: 0,
      gm: 0,
      gk: 0,
      point: 0,
    },
    {
      name: "Club 3",
      city: "City 3",
      ma: 0,
      me: 0,
      s: 0,
      k: 0,
      gm: 0,
      gk: 0,
      point: 0,
    },
  ]);
  const [inputClub, setInputClub] = useState({ name: "", city: "" });

  const [inputScore, setInputScore] = useState([
    { homeClub: "", homeScore: "", awayClub: "", awayScore: "" },
  ]);

  const state = {
    data,
    setData,
    inputClub,
    setInputClub,
    inputScore,
    setInputScore,
  };

  const handleInputClub = (e) => {
    const { name, value } = e.target;
    setInputClub({ ...inputClub, [name]: value });
  };

  const handleSubmitClub = (e) => {
    e.preventDefault();
    if (!data.find((x) => x.name === inputClub.name)) {
      data.push({
        ...inputClub,
        ma: 0,
        me: 0,
        s: 0,
        k: 0,
        gm: 0,
        gk: 0,
        point: 0,
      });
      setInputClub({ name: "", city: "" });
    } else {
      setInputClub({ name: "", city: "" });
      return alert("Cant Input Same Club");
    }
  };

  const handleClick = () => {
    setInputScore([
      ...inputScore,
      { homeClub: "", homeScore: "", awayClub: "", awayScore: "" },
    ]);
  };

  const handleDelete = (i) => {
    const deleteVal = [...inputScore];
    deleteVal.splice(i, 1);
    setInputScore(deleteVal);
  };

  const handleInputScore = (e, i) => {
    const { name, value } = e.target;
    const onchangeVal = [...inputScore];
    onchangeVal[i][name] = value;
    setInputScore(onchangeVal);
  };

  const handleSubmitScore = (e) => {
    e.preventDefault();

    for (let i = 0; i < inputScore.length; i++) {
      const el = inputScore[i];

      if (el.homeClub === el.awayClub) {
        setInputScore([
          { homeClub: "", homeScore: "", awayClub: "", awayScore: "" },
        ]);
        return alert("Cant Input Same Club");
      } else {
        const homeIndex = data.findIndex((x) => x.name === el.homeClub);
        const awayIndex = data.findIndex((x) => x.name === el.awayClub);

        // HOME
        data[homeIndex] = {
          ...data[homeIndex],
          ma: data[homeIndex].ma + 1,
          me:
            el.homeScore > el.awayScore
              ? data[homeIndex]?.me + 1
              : data[homeIndex]?.me,
          s:
            el.homeScore === el.awayScore
              ? data[homeIndex]?.s + 1
              : data[homeIndex]?.s,
          k:
            el.homeScore < el.awayScore
              ? data[homeIndex]?.k + 1
              : data[homeIndex]?.k,
          gm: data[homeIndex].gm + +el.homeScore,
          gk: data[homeIndex].gk + +el.awayScore,
          point:
            el.homeScore > el.awayScore
              ? data[homeIndex]?.point + 3
              : el.homeScore === el.awayScore
              ? data[homeIndex]?.point + 1
              : data[homeIndex]?.point,
        };

        // AWAY
        data[awayIndex] = {
          ...data[awayIndex],
          ma: data[awayIndex].ma + 1,
          me:
            el.awayScore > el.homeScore
              ? data[awayIndex]?.me + 1
              : data[awayIndex]?.me,
          s:
            el.awayScore === el.homeScore
              ? data[awayIndex]?.s + 1
              : data[awayIndex]?.s,
          k:
            el.awayScore < el.homeScore
              ? data[awayIndex]?.k + 1
              : data[awayIndex]?.k,
          gm: data[awayIndex].gm + +el.awayScore,
          gk: data[awayIndex].gk + +el.homeScore,
          point:
            el.awayScore > el.homeScore
              ? data[awayIndex]?.point + 3
              : el.awayScore === el.homeScore
              ? data[awayIndex]?.point + 1
              : data[awayIndex]?.point,
        };
      }
    }

    setInputScore([
      { homeClub: "", homeScore: "", awayClub: "", awayScore: "" },
    ]);
  };

  const handleFunction = {
    handleInputClub,
    handleSubmitClub,
    handleSubmitScore,
    handleInputScore,
    handleDelete,
    handleClick,
  };

  return (
    <GlobalContext.Provider value={{ state, handleFunction }}>
      {children}
    </GlobalContext.Provider>
  );
};
