import Item from './Item/Item';
import './Menu.scss';

const Menu = () => {
    const categories = ["Appetizer", "Main course", "Dessert", "Breakfast", "Drink", "Soup", "Salad", "Sauce"];
    const thematics = ["Asian", "Italian", "Indian", "African", "Mexican", "French", "American", "Chinese"];
    const seasons = ["Spring", "Summer", "Autumn", "Winter"];
    const diet = ["Vegetarian", "Vegan", "FODMAP"];
    const intelorances = ["Gluten", "Dairy", "Egg", "Peanut", "Seafood", "Wheat"];

    return (
        <ul className='list-inline d-flex mb-0 menu'>
            <Item name="Catégorie" elements={categories} params="type"/>
            <Item name="Thémathique" elements={thematics} params="cuisine"/>
            <Item name="Saison" elements={seasons} params="query"/>
            <Item name="Régime" elements={diet} params="diet"/>
            <Item name="Intolérance" elements={intelorances} params="intolerances"/>
        </ul>
    )
};

export default Menu;