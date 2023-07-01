import {ICategoryItem} from "./types";
import React, {FC} from "react";
import {APP_ENV} from "../../../env/app_env";
import {Link} from "react-router-dom";

const CategoryItem: FC<ICategoryItem> = ({id, name, image, description}) => {

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>
                <img src={`${APP_ENV.BASE_URL}uploads/150_${image}`} alt="фото" width={150}/>
            </td>
            <td>{description}</td>
            <td>
                <Link to={`/category/edit/${id}`} className="btn btn-info" >Змінить</Link>
            </td>
        </tr>
    );
};

export default CategoryItem;
