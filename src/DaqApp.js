import React, { useState } from 'react'
import DaqAccountList from './components/DaqAccountList';
import DaqAccountAdd from './components/DaqAccountAdd';

function DaqApp() {
   // Khai báo state để quản lý danh sách sinh viên
   const [listStudent, setListStudent] = useState([
    {  DaqId: "SV01",  DaqfullName: "Trần Tiến Anh",  DaqEmail: "tienanhtran755@gmail.com",  DaqAmount: "500.000 VND" },
    {  DaqId: "SV02",  DaqfullName: "Nguyễn Ngọc Hiếu",  DaqEmail: "bnguyen@gmail.com",  DaqAmount: "750.000 VND" },
    {  DaqId: "SV03",  DaqfullName: "Lê Ngọc Mai",  DaqEmail: "cle@gmail.com",  DaqAmount: "1.200.000 VND" },
  ]);
  // Hàm thêm sinh viên mới
  const handleAddStudent = (newStudent) => {
    setListStudent([...listStudent, newStudent]); 
  };
  return (
    <div className="App container py-5">
      {/* Tiêu đề */}
      <h1
        className="text-center text-white mb-4 py-3"
        style={{
          background: 'linear-gradient(135deg,rgb(151, 198, 186),rgb(216, 253, 161))',
          borderRadius: '12px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
        }}
      >
        Quản Lý Sinh Viên và  Số Tiền Đóng
      </h1>

      {/* Chia hàng 2 bên */}
      <div className="row">
        {/* Cột danh sách sinh viên */}
        <div className="col-md-7 mb-4">
          {/* <TtaAccountList students={listStudent} /> */}
          <DaqAccountList  students={listStudent} />
        </div>

        {/* Cột form thêm sinh viên */}
        <div className="col-md-5 mb-4">
          {/* <TtaAccountAdd onAddStudent={handleAddStudent} /> */}
          <DaqAccountAdd  onAddStudent={handleAddStudent} />
        </div>
      </div>
    </div>
  );
}
export default DaqApp;