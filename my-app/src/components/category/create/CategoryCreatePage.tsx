const CategoryCreatePage = () => {
    return (
        <>
            <h1 className={"text-center"}>Додати категорію</h1>
            <form className={"col-md-8 offset-md-2"}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Назва</label>
                    <input type="text" className="form-control" id="name" name={"name"}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">Фото</label>
                    <input type="text" className="form-control" id="image" name={"image"}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Опис</label>
                    <input type="text" className="form-control" id="description" name={"description"}/>
                </div>

                <button type="submit" className="btn btn-primary">Додати</button>
            </form>
        </>
    );
}
export default CategoryCreatePage;