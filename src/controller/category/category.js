const Category = require('../../models/category');
const slugify = require('slugify');

function getCategory(categories,parentId=null){
    const categoryItems = [];
    let category;
    if (parentId == null ) {
        category= categories.filter(item=>item.parentId==undefined);
    }else{
        category= categories.filter(item=>item.parentId==parentId);
    }
    for (let item of category) {
        categoryItems.push({
            id:item._id,
            name:item.name,
            slug:item.slug,
            children:getCategory(categories,item._id)
        });
        
    }
    return categoryItems;
}

exports.createCategoty = (req, res) => {
    const categoryObj = {
        name: req.body.name,
        slug: slugify(req.body.name),
    }
    if (req.body.parentId) {
        categoryObj.parentId = req.body.parentId;
    }
    const category = new Category(categoryObj);
    category.save((error,data) => {
        if (error) {
            res.status(400).json({
                message: 'somthing went wrong '
            });
        }
        if (data) {
            return res.status(201).json({
                message: 'Category created successfully'
            });
        }
    });
}

exports.retriveCategory = (req,res)=>{
    Category.find({})
    .exec((error,categories)=>{
        if (error) return res.status(400).json({error});
        if (categories) {
            const categoryItems = getCategory(categories);
            res.status(200).json({categoryItems});
        }
    })
}