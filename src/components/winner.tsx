const Winner = (picture: string) => {
  if (!picture) throw new Error("Picture was not given!");
  return <div className="winnerPicture">{picture}</div>;
};

export default Winner;
