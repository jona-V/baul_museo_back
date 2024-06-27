/*import Favs from "../models/favs.model.js";
import User from "../models/user.model.js";

export const addFavs = async (req, res) => {*/
  /*try {
      const favs = await Favs.find({ user : req.user.id }).populate("user");
      res.json(favs);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    } */
  /*const { username } = ctx.state.currentUser
  ctx.response.status = 200
  ctx.response.body = { favs: favs[username] }
};

export const postFavs = async (req, res) => {*/
  /*try {
        const { id, image, title, category, date, description, link } = req.body;
        console.log(req.user);
        const newFav = new Favs({
        id, 
        image, 
        title, 
        category, 
        date, 
        description, 
        link,
        user: req.user.id,
        });
        await newFav.save();
        res.json(newFav);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      } */
 /* const { id } = ctx.params
  const { username } = ctx.state.currentUser

  const alreadyExist = favs[username].some(
    (favId = string) => favId == id
  )
  if (!alreadyExist) {
    favs[username].push(id)
  }

  console.log({
    alreadyExist,
    favs: favs[username],
    username,
  })

  ctx.response.body = { favs: favs[username] }
  ctx.response.status = 201
};

export const deleteFavs = async (req, res) => {
  const { id } = ctx.params
  const { username } = ctx.state.currentUser
  favs[username] = favs[username].filter(
    (favId = string) => favId !== id
  )

  console.log({
    idRemoved: id,
    remainingFavs: favs[username],
    username,
  })

  ctx.response.body = { favs: favs[username] }
  ctx.response.status = 200
};*/

/*export const addFav = async (req, res) => {
    try {
        const Fav = await Favs.findById(req.params.id);
        if (!Fav) return res.status(404).json({ message: "Favorito no encontrado" });
        return res.json(Fav);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};
 */


