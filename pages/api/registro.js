export default function handler(req, res) {
  if (req.method === 'POST') {

    console.log(req.method)
    console.log(req.body)
    /* console.log("DAYANA");
    const { id, imagen, nombre, descripcion } = req.body
    console.log(id);
    res.json({ message: `Película ${nombre} Registrada` }) */
    res.json({ payload: req.body })
  } else {
    res.json({ message: "Dayana" })
  }
}