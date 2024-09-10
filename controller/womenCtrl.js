let womenOutfits = [
  { name: "jean", taille: 32, description: "Jean Kpéssé" },
  { name: "jean", taille: 28, description: "Jean cassé" },
  { name: "jean", taille: 24, description: "Jean Evisu" },
];
exports.selectAllWomenOutfits = (req, res) => {
  res.status(200).json({ womenOutfits });
};

exports.addNewOutfit = (req, res) => {
  womenOutfits.push(req.body);
  res.status(201).json({ message: "new outfit added", womenOutfits });
};
