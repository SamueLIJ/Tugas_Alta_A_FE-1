import React,{useState} from 'react'

export default function Form() {
    const [errMsg, setErrMsg] = useState([])
    const initData = {
        namaLengkap: "",
        email: "",
        noHandphone: "",
        pendidikan: "",
        kelas: "",
        fotoFile: "",
        harapan: ""
        
    }
    const [data, setData] = useState(initData)
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setData({
            ...data,
            [name]: value
        })
    }

    const rgxOnlyChar = /^([a-zA-Z]+\s)*[a-zA-Z]+$/
    const rgxEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const rgxIndoPhone = /((\+62 8\d{2}([ -])|08\d{2}([ -]?)|\+628\d{2})\d{4}(\3\4)\d{2,5})/
    const handleSubmit = (e) => {
        let err = []

        // VALIDASI REQUIRED
        if(data.namaLengkap == ""){
            err.push("Form Nama Lengkap Tidak Boleh Kosong")
        }
        if(data.email == ""){
            err.push("Form Email Tidak Boleh Kosong")
        }
        if(data.noHandphone == ""){
            err.push("Form No Handphone Tidak Boleh Kosong")
        }
        if(data.pendidikan == ""){
            err.push("Form Latar Belakang Pendidikan Tidak Boleh Kosong")
        }
        if(data.kelas == ""){
            err.push("Form Kelas Coding Tidak Boleh Kosong")
        }
        if(data.fotoFile == "") {
            err.push("File Foto Surat Kesungguhan Harus Di Unggah")
        }

        
        if (!rgxOnlyChar.test(data.namaLengkap)){
            err.push("Nama Lengkap Berisikan Huruf")
        }
        if(!rgxEmail.test(data.email)){
            err.push("Email Tidak Benar")
        }
        if(!rgxIndoPhone.test(data.noHandphone) && data.noHandphone.length < 8 || data.noHandphone.length > 15){
            err.push("No Handphone Tidak Benar")
        }
        if(err.length > 0){
            alert("Data Pendaftar Kurang Benar")
        }else{
            alert('Data Pendaftar "' +data.namaLengkap+ '" Diterima')
            handleReset(e)
        }
        setErrMsg(err)
        e.preventDefault()
    }

    const handleReset = (e) => {
        e.preventDefault()
        setErrMsg(
            []
        )
        setData(
            initData
        )
    }
    return (
        <div>
            <h1 className="text-center">Pendaftaran Peserta Coding Bootcamp</h1>

<form>
    <div className="form-group">
        <label htmlFor="namaLengkap">Nama Lengkap :</label>
        <input type="text" className="form-control" name="namaLengkap" value={data.namaLengkap} onChange={handleChange} required />
        <br />
    </div>
    <div className="form-group">
        <label htmlFor="email">Email :</label>
        <input type="text" className="form-control" name="email" onChange={handleChange} value={data.email} required />
    </div>
    <div className="form-group">
        <label htmlFor="noHandphone">No. Handphone :</label>
        <input type="text" className="form-control" name="noHandphone" onChange={handleChange} value={data.noHandphone} required />
    </div>
    <div className="form-group">
        <label>Latar Belakang Pendidikan : </label><br />
        <div onChange={handleChange}>
            <input className="form-check-input" type="radio" name="pendidikan" id="IT" value="IT" required />
            <label className="form-check-label" forHtml="IT">
                IT
            </label>
            <input className="form-check-input ms-2" type="radio" name="pendidikan" value="Non IT" id="Non-IT" />
            <label className="form-check-label" forHtml="Non-IT" >
                Non IT
            </label>
        </div>
    </div>
    <div className="form-group">
        <label htmlFor="Kelas">Kelas Coding yang Dipilih :</label>
        <select name="kelas" id="kelas" className="form-control" onChange={handleChange} value={data.kelas} required>
            <option value=""></option>
            <option value="Coding Backend with Golang">Coding Backend with Golang</option>
            <option value="Coding Frontend with ReactJS">Coding Frontend with ReactJS</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
        </select>
    </div>
    <div className="form-group">
        <label htmlFor="fotoFile">Foto Surat Kesungguhan :</label><br />
        <input type="file" name="fotoFile" onChange={handleChange} value={data.fotoFile} id="fotoFile" accept="image/*" required />
    </div>
    <div className="form-group">
        <label htmlFor="harapan">Harapan</label>
        <textarea name="harapan" id="harapan" className="form-control" onChange={handleChange} value={data.harapan} />
    </div>
    <ul className="text-danger mt-2">
        {errMsg.map((x, k) => (
            <li key={k}>{x}</li>
        ))}
    </ul>

    <div className="mt-2">
        <button onClick={handleSubmit} className="btn me-2 btn-success">Submit</button>
        <button onClick={handleReset} className="btn btn-danger">Reset</button>
    </div>
</form>
        </div>
    )
}
