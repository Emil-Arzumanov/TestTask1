import inputStyle from "./Input.module.css";

let checker = true;
let searchArrayChecker = true;
function foo(value,searhArray) {
    let regex_pattern = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm;
    let check = new RegExp(regex_pattern);
    checker = check.test(value);
    searchArrayChecker = false;
    if (checker === true) {
        searhArray.forEach(element => {
            if (element.number === value) {
                searchArrayChecker = true;
            }
        })
    }
    if (value === "") {
        checker = true;
        searchArrayChecker = true;
    }
}

const Input = (props) => {
    function onClickButtonFunc () {
        props.callBackFunc();
        checker = true;
        searchArrayChecker = true;
    }
    return (
        <div>
            <div className={inputStyle.inputDiv}>
                <input
                    name={props.name}
                    className={checker ? (searchArrayChecker ? inputStyle.inputText : inputStyle.inputYellow) : inputStyle.inputTextErr}
                    type="text"
                    value={props.value}
                    onChange={event => {
                        props.onChangeHandler(event.target.value);
                        foo(event.target.value,props.searchArray);
                    }}
                />
                <input className={inputStyle.inputButton} value={"Добавить"} type={"submit"} onClick={onClickButtonFunc}/>
                <ol>{props.searchArray.map(item => <li key={item.id}>{item.number}</li>)}</ol>
            </div>
        </div>
    )
};

export default Input;