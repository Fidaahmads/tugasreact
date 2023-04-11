import React from "react";
import { Table, Container, Button, Form, FormGroup, Label, Input, FormText, Modal, ModalHeader, ModalBody, ModalFooter, Card, Col, Row } from "reactstrap";

let dataSiswas = [
  {
    id: 1,
    nama: 'Edgar Allan Poe',
    alamat: 'Lille',
    instansi: 'Pemerintah',
    beasiswa: false,
    program: 'IT',

  },
  {
    id: 2,
    nama: 'Osamu Dazai',
    alamat: 'Japan',
    instansi: 'LPKS',
    beasiswa: true,
    program: 'Multimedia',

  },
  {
    id: 3,
    nama: 'Takashi Ohbata',
    alamat: 'Kansai',
    instansi: 'Jumo',
    beasiswa: false,
    program: 'Art',

  },
  {
    id: 4,
    nama: 'Tere Liye',
    alamat: 'Depok',
    instansi: 'LPDI',
    beasiswa: false,
    program: 'Multimedia',

  },

]


class InputSiswa extends React.Component {

  constructor() {
    super()
    this.state = {
      nama: '',
      alamat: '',
      instansi: '',
      beasiswa: false,
      program: '',
      id: '',
      namaTombol: "Tambah"
    }
  }

  handleEditButton = (data) => {
    // console.log(dataSiswas);
    const newDatas = dataSiswas.filter(
      i => i.id === data
    )
    this.setState({
      nama: newDatas[0].nama,
      alamat: newDatas[0].alamat,
      instansi: newDatas[0].instansi,   
      beasiswa: newDatas[0].beasiswa,
      program: newDatas[0].program,
      id: newDatas[0].id,
      namaTombol: "Ubah",
      modal: false
    })




  }

  toggle = () => {
    const modal = (this.state.modal) ? false : true;
    this.setState({ modal: modal });
  }

  clearState = () => {
    this.setState({
      nama: '',
      alamat: '',
      instansi: '',
      beasiswa: '',
      program: '',
      id: '',
      namaTombol: "Tambah",
    })
  }

  handleSubmitButtom = () => {


    if (this.state.namaTombol === "Ubah") {
      // edit
      // alert(`Ini data akan dirubah`);

      const result = dataSiswas.findIndex((a) => a.id === this.state.id);
      // console.log(result);
      const newDataSiswas = dataSiswas;
      newDataSiswas.splice(result, 1, this.state);
      this.clearState();

    } else {
      let hasilSubmit = this.state;
      hasilSubmit.id = Math.floor(Math.random() * 10000000);
      // Cek dulu validasi nya
      // Cek nama
      if (this.state.nama.trim() === "") {
        alert('Maaf Nama Kosong');

      } else {

        dataSiswas.push(hasilSubmit);
        this.clearState();
      }
    }
  }
  
  handleHapusButton = (data) => {
    let newData = dataSiswas.filter((siswa) => siswa.id !== data);
    dataSiswas = newData;
    this.clearState();
  };

  render() {
    return (
      <>
    
        <Container>
          
          <h1 className="mt-3 mb-2 text-center" >Daftar Peserta Bootcamp</h1>
         
        <br></br>
      
          <Row>
           <Col sm="3">
          {/* Ini adalah form input */}
          <Card body
            color="light"
            >
               <h3 className="text-center">Masukan Data</h3>
               <br></br>
            <Form>
              <FormGroup>
                <Label for="nama">
                  Nama
                </Label>
                <Input
                  id="nama"
                  name="nama"
                  placeholder="Tulis Nama"
                  type="text"
                  value={this.state.nama}
                  onChange={(a) => {
                    return this.setState({ nama: a.target.value })
                  }}

                  invalid={this.state.nama.trim() === "" && true}
                  valid={this.state.nama.trim() !== "" && true}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">
                  Alamat
                </Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="textarea"
                  value={this.state.instansi}
                  onChange={(a) => {
                    return this.setState({ instansi: a.target.value })
                  }}
                  invalid={this.state.instansi.trim() === "" && true}
                  valid={this.state.instansi.trim() !== "" && true}
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">
                  Instansi
                </Label>
                <Input
                  id="exampleText"
                  name="text"
                  type="textarea"
                  value={this.state.alamat}
                  onChange={(a) => {
                    return this.setState({ alamat: a.target.value })
                  }}
                  invalid={this.state.alamat.trim() === "" && true}
                  valid={this.state.alamat.trim() !== "" && true}
                />
              </FormGroup>
              
              <FormGroup check>
                <Input type="checkbox" checked={this.state.beasiswa === true}
                  onChange={(a) => {
                    return this.setState({ beasiswa: a.target.checked })
                  }} />
                <Label check>
                  Beasiswa
                </Label>
                <br></br>
                <br></br>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">
                    Program
                </Label>
                <Input
                  id="exampleSelect"
                  name="select"
                  type="select"
                  value={this.state.program}
                  onChange={(a) => {
                    return this.setState({ program: a.target.value })
                  }}
             
                  valid={this.state.program.trim() !== "" && true}
                >
                  <option>
                    IT
                  </option>
                  <option>
                    Multimedia
                  </option>
                </Input>
              </FormGroup>
              <Button color="success" onClick={this.handleSubmitButtom}>
                {this.state.namaTombol}
              </Button>
              <br></br>
          
            </Form>
          </Card>
     </Col>
            
          <br />
          <Col sm="9">
          <Card body
            color="light"
            inverse>
          <Table
            hover
            responsive
            bordered
            
          >
            <thead>
              <tr>
                <th>
                  #
                </th>
                <th>
                  Nama 
                </th>
                <th>
                  Alamat
                </th>
                <th>
                  Instansi
                </th>
                <th>
                  Beasiswa
                </th>
                <th>
                  Program
                </th>
                <th>
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {dataSiswas.map((siswa, i) =>
                <tr key={i}>
                  <th scope="row">
                    {++i}
                  </th>
                  <td>
                    {siswa.nama}
                  </td>
                  <td>{siswa.alamat}</td>
                  <td>
                    {siswa.instansi}
                  </td>
                  <td> {siswa.beasiswa.toString()} </td>
                  <td>
                    {siswa.program}
                  </td>
                  <td>
                    <div>
                      <Button
                        color="info"

                        onClick={
                          () => { this.handleEditButton(siswa.id) }
                        }
                      >
                        Ubah
                      </Button>
                      &nbsp;
                      <Button
                        color="danger"
                        onClick={() => {
                          this.handleHapusButton(siswa.id)
                        }}
                      >
                        Hapus
                      </Button>
                    </div>
                  </td>
                </tr>
              )}

            </tbody>
          </Table>
          </Card>
          </Col>
      </Row>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
            <ModalBody>
              Yakin Mau dihapus ??
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.toggle}>
                Ya
              </Button>
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>


        </Container>
      </>
    )
  }

}

export default InputSiswa;