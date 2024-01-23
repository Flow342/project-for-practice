import React from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

function PostFilter({ filter, setFilter }) {
    return (
        <div>
            <MySelect
                value={filter.sort}
                onChange={(selectedSort) =>
                    setFilter({ ...filter, sort: selectedSort })
                }
                defaultValue="Сортировка"
                options={[
                    { value: "title", name: "По названию" },
                    { value: "body", name: "По описанию" },
                ]}
            />
            <MyInput
                value={filter.query}
                style={{ margin: "5px", width: "80%" }}
                placeholder="Поиск..."
                onChange={(e) =>
                    setFilter({ ...filter, query: e.target.value })
                }
            />
        </div>
    );
}

export default PostFilter;
