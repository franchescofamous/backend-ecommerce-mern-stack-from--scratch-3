let menOutfits = [
  { name: "jean", taille: 32, description: "Jean Kpéssé" },
  { name: "jean", taille: 45, description: "Jean cassé" },
  { name: "jean", taille: 40, description: "Jean Evisu" },
];
exports.selectAllMenOutfits = (req, res) => {
  res.json({ products: menOutfits });
};
exports.addNewOutfit = (req, res) => {
  console.log(req.body);
  menOutfits.push(req.body);
  res.status(201).json({ message: "new outfit added", menOutfits });
};
