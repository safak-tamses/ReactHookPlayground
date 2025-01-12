/**
 * File Name: usage1.tsx
 * Purpose: To provide a detailed explanation and examples of the useState hook in React.
 * Usage: Adding state to a component.
 * Description: Call useState at the top level of your component to declare one or more state variables.
 * Author: Şafak Tamses
 * Date: 01/07/2025
 * License: MIT License
 */

/**
 * @param
 * @return
 * @throws
 */

import React, {useState} from 'react';
import './usage1.css';

function Usage1() {
    const [state, setState] = useState<boolean>(true);
    const [count, setCount] = useState<number>(0);
    const [text, setText] = useState('hello');
    const [liked, setLiked] = useState(true);
    const [name, setName] = useState('safak');
    const [age, setAge] = useState(28);

    const showState = () => {
        setState(!state);
    }
    const handleClick = () => {
        setCount(count + 1);
    }
    const handleReset = () => {
        setCount(0);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    console.log("test");

    const handleChangeCheckBox = (e:any) => {
        setLiked(e.target.checked);
    }
    return (
        <div className={"parent"}>
            <div className={"child"}>
                <p>{"Example 1: Change boolean"}</p>
                <p>{"state: "}{String(state)}</p>
                <button onClick={() => showState()}>{"Change state value"}</button>
            </div>

            <div className={"child"}>
                <p>{"Example 2: Counter(number)"}</p>
                <button onClick={handleClick}>
                    You pressed me {count} times
                </button>
                <p></p>
                <button onClick={handleReset}>
                    Reset count
                </button>

            </div>

            <div className={"child"}>
                <p>{"Example 3: Text field (string)"}</p>
                <>
                    <input value={text} onChange={handleChange}/>
                    <p>You typed: {text}</p>
                    <button onClick={() => setText('hello')}>
                        Reset
                    </button>
                </>
            </div>

            <div className={"child"}>
                <p>{"Example 4: Checkbox (boolean)"}</p>
                <label>
                    <input
                        type="checkbox"
                        checked={liked}
                        onChange={handleChangeCheckBox}
                    />
                    I liked this
                </label>
                <p>You {liked ? 'liked' : 'did not like'} this.</p>
            </div>

            <div className={"child"}>
                <p>{"Example 5: Form (two variables)"}</p>
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <button onClick={() => setAge(age + 1)}>
                    Increment age
                </button>
                <p>Hello, {name}. You are {age}.</p>
            </div>


        </div>
    );
}

export default Usage1;