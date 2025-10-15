import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
const accounts = [
    { id: 1, usename: "john_doe", avatar: "https://i.pravatar.cc/150?img=1" },
    { id: 2, usename: "jane_smith", avatar: "https://i.pravatar.cc/150?img=2" },
    { id: 3, usename: "alice_jones", avatar: "https://i.pravatar.cc/150?img=3" },
    { id: 4, usename: "bob_brown", avatar: "https://i.pravatar.cc/150?img=4" }
]
const SearchAccount = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredList = accounts.filter(account =>
        account.usename.toLowerCase().includes(searchTerm.toLowerCase())
    );
// ỉn ra  user dưới dạng card
    return (
        <div
            style={{
                maxWidth: '600px',
                margin: '40px auto', 
                padding: '24px',
                borderRadius: '12px',
                boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
                background: '#f7fafd'
            }}>
            <h3 style={{ textAlign: 'center', color: '#1976d2', marginBottom: '24px' }}>Search Accounts by Username</h3>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by username..."
                style={{
                    width: '100%',
                    padding: '10 px 14px',
                    borderRadius: '8px',
                    border: '1.5px solid #90caf9',
                    marginBottom: '18px',
                    fontSize: '16px',
                    outline: 'none',
                    boxSizing: 'border-box'
                }}
            />
            <Row>
                {filteredList.map(account => (
                    <Col key={account.id} md={4}>
                        <Card style={{ marginBottom: '20px', boxShadow: '0 1px 4px rgba(33, 150, 243, 0.07)' }}>
                            <Card.Img variant="top" src={account.avatar} />
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center', color: '#1976d2' }}>{account.usename}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                {filteredList.length === 0 && (
                    <p style={{ textAlign: 'center', color: '#888', padding: '10px 0' }}>No accounts found</p>
                )}
            </Row>
        </div>
    );
};

export default SearchAccount;