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

    const fotoSurat = useRef(null)

    const handleInput = e => {
        const name=e.target.name;
        const value=e.target.value;

        setData ({
            ...data,
            [name]: value
        })
    }

    return ( 
        <div className="form-daftar">
            <h1> Pendaftaran Peserta Coding Bootcamp </h1>
            <form>
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
                    name="foto"
                    ref={fotoSurat}
                />
                </label>
                <label>
                    Harapan untuk Coding Bootcamp ini : <br/>
                    <textarea name="harapan" onChange={handleInput} value={data.harapan}/>
                </label>
                <input 
                type="submit"
                value="Submit"

                style={{width:"8rem", 
                backgroundColor:"green", 
                color:"white",
                marginLeft:"4rem",
                marginRight:"10px",
                marginTop: "30px",
                display:"inline-block",
                border: "none",
                padding: "8px"
                }}

                required
                 />
                 <button>Reset</button>
            </form>
        </div>
     );
}
 
export default Form;