import { Table } from "react-bootstrap";

export default function Step3Confirm({ formData }) {
  return (
    <>
      <h5 className="fw-bold mb-3">Bước 3: Xác nhận thông tin</h5>
      <Table bordered hover>
        <tbody>
          <tr>
            <th>Họ tên</th>
            <td>{formData.name}</td>
          </tr>
          <tr>
            <th>Địa chỉ</th>
            <td>{formData.address}</td>
          </tr>
          <tr>
            <th>Đi từ</th>
            <td>{formData.from}</td>
          </tr>
          <tr>
            <th>Đến</th>
            <td>{formData.to}</td>
          </tr>
          <tr>
            <th>Ngày khởi hành</th>
            <td>{formData.date}</td>
          </tr>
          <tr>
            <th>Loại vé</th>
            <td>{formData.type}</td>
          </tr>
        </tbody>
      </Table>
      <p className="text-success fw-bold text-center">
        Vui lòng kiểm tra kỹ trước khi gửi!
      </p>
    </>
  );
}
