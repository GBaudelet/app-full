import pool from "../../config/db.js";

const admin_view = (req, res) => {
  res.render("admin/index");
};

const story_list_view = (req, res) => {
  const q = "SELECT * FROM `story`";

  pool.query(q).then(([stories]) => {
    res.render("admin/story/list", { stories });
  });
};

const update_category = (req, res) => {
  const q = "SELECT * FROM `category`";

  pool.query(q).then(([categories]) => {
    res.render("admin/category/category", { categories });
  });
};

const create_story_view = (req, res) => {
  const q = "SELECT * FROM category";
  pool.query(q).then(([categories]) => {
    res.render("admin/story/create", { categories });
  });
};

const create_category_view = (req, res) => {
  const q = "SELECT * FROM category";
  pool.query(q).then(([categories]) => {
    res.render("admin/category/create_category", { categories });
  });
};

export {
  admin_view,
  story_list_view,
  create_story_view,
  update_category,
  create_category_view,
};
