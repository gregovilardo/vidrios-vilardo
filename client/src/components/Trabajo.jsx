import { useState } from "react";
import Button from "@material-ui/core/Button";
import Viewer from "react-viewer";
import _ from "lodash";

function Trabajo(props) {
    const [visible, setVisible] = useState(false);
    const img = `./img/${_.kebabCase(props.section)}/${_.kebabCase(
        props.product
    )}/min.jpg`;

    function createArrayImg(section, product, n) {
        let imgArray = [{}];

        for (let i = 1; i < n; i++) {
            let imgObj = {
                src: `./img/${_.kebabCase(section)}/${_.kebabCase(
                    product
                )}/${i}.jpeg`,
                alt: `${section} ${product}`,
            };
            imgArray.push(imgObj);
        }
        imgArray.shift();
        return imgArray;
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mt-3 trabajo-comp">
            <Button
                onClick={() => {
                    setVisible(true);
                }}
                variant="outlined"
            >
                {props.name}
            </Button>
            <Viewer
                visible={visible}
                onClose={() => {
                    setVisible(false);
                }}
                images={createArrayImg(
                    props.section,
                    props.product,
                    props.imgAmount
                )}
                
                customToolbar={(toolbar) => [
                    { actionType: 1, key: "zoomIn" },
                    { actionType: 2, key: "zoomOut" },
                    { actionType: 3, key: "prev" },
                    { actionType: 7, key: "reset" },
                    { actionType: 4, key: "next" },
                    {
                        actionType: 6,
                        key: "close",
                        onClick: () => {
                            setVisible(false);
                        },
                    },
                ]}
            />
            <img src={img} className="img-fluid" alt="imagen de trabajos" />
        </div>
    );
}

export default Trabajo;
