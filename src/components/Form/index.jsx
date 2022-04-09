import { useRef, useState } from "react";
import styles from "./form.css";

const Form = (props) => {
    const dataKosong = {
        nama:"",
        email:"",
        noHp:"",
        pendidikan:"",
        kelas:"",
        harapan:""
    }
    
    const [data, setData] = useState(dataKosong)

    const regexHuruf = /^[A-Za-z ]*$/;
    const regexEmail = /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;

    const [errMsg, setErrMsg] = useState("")

    const fotoSurat = useRef(null)

    const handleInput = e => {
        const name=e.target.name;
        const value=e.target.value;

        if (name=== "nama") {
            if (regexHuruf.test(value)){
                setErrMsg("")
            } else {
                setErrMsg("Nama Lengkap harus berupa huruf")
            }
        } else if (name === "email"){
            if (regexEmail.test(value)){
                setErrMsg("")
            } else {
                setErrMsg("Email tidak sesuai")
            }
        } else if (name === "noHp"){
            if (data.noHp.length < 9 || data.noHp.length > 14) {
                setErrMsg("Nomor Handphone tidak sesuai")
            } else {
                setErrMsg("")
            }
        }

        setData ({
            ...data,
            [name]: value
        })
        console.log("data", data)
    }

    const handleSubmit = () => {
        if (errMsg !== "") {
            alert("Terdapat data yang tidak sesuai")
        } else {
            alert('Data peserta berhasil diterima!')
        }
    }

    return ( 
        <div className="form-daftar">
            <h1> Pendaftaran Peserta Coding Bootcamp </h1>
            <form onSubmit={handleSubmit}>
                <label>Nama Lengkap :
                <input
                    type="text"
                    name="nama"
                    onChange={handleInput}
                    value={data.nama}
                    required
                />
                </label>
                <label>Email : 
                <input
                    type="text"
                    name="email"
                    onChange={handleInput}
                    value={data.email}
                    required
                />
                </label>
                <label>No Handphone : 
                <input
                    type="text"
                    name="noHp"
                    onChange={handleInput}
                    value={data.noHp}
                    required
                />
                </label>
                <label >
                    Latar Belakang Pendidikan : 
                    <br/>
                    <input
                        type="radio"
                        name="pendidikan"
                        onChange={handleInput}
                        value={data.pendidikan}
                        style={{display:"inline-block",width:"10px"}}
                        required
                    /> IT
                    <input
                        type="radio"
                        name="pendidikan"
                        onChange={handleInput}
                        value={data.pendidikan}
                        style={{display:"inline-block", width:"10px"}}
                        required
                /> non IT
                </label>
                <label>
                    Kelas Coding yang Dipilih : <br/>
                    <select name="kelas" onChange={handleInput} value={data.kelas}>
                        <option value="golang" required>Coding Backend with Golang </option>
                        <option value="react" required>Coding Frontend with ReactJS</option>
                        <option value="fullstack" required>Fullstack Developer</option>
                    </select>
                </label>
                <label>
                    Foto Surat Kesungguhan : 
                    <input
                    type="file"
                    ref={fotoSurat}
                />
                </label>
                <label>
                    Harapan untuk Coding Bootcamp ini : <br/>
                    <textarea name="harapan" onChange={handleInput} value={data.harapan}/>
                </label>
                <div className="error">
                    <span className="errorMessage">{errMsg}</span>
                </div>
                <input 
                type="submit"
                value="Submit"
                className="input-submit"
                required
                 />
                 <button>Reset</button>
            </form>
        </div>
     );
}
 
export default Form;