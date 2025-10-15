import { useState } from "react";
const data = [
    { id: 1, name: "Apple", category: "fruit" },
    { id: 2, name: "Carrot", category: "vegetable" },
    { id: 3, name: "Banana", category: "fruit" },
    { id: 4, name: "Broccoli", category: "vegetable" },
    { id: 5, name: "Orange", category: "fruit" },
    { id: 6, name: "Spinach", category: "vegetable" },
    { id: 7, name: "Grapes", category: "fruit" },
    { id: 8, name: "Potato", category: "vegetable" }
]
const SearchItem = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredList = data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
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
            <h3 style={{ textAlign: 'center', color: '#1976d2', marginBottom: '24px' }}>Search Items by Name</h3>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name..."
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
            <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}>
                {filteredList.map(item => (
                    <li
                        key={item.id}
                        style={{
                            background: '#e3f2fd',
                            marginBottom: '10px',
                            padding: '10px 14px',
                            borderRadius: '7px',
                            fontSize: '16px',
                            color: '#333',
                            boxShadow: '0 1px 4px rgba(33, 150, 243, 0.07)'
                        }}
                    >
                        <span style={{ fontWeight: '600px', textAlign: 'center', padding: '10px 0' }}>{item.name}</span>
                        <span style={{ color: '#1976d2', textAlign: 'center', padding: '10px' }}>{item.category}</span>
                    </li>
                ))}
                {filteredList.length === 0 && (
                    <li style={{ color: '#888', textAlign: 'center', padding: '10px 0' }}
                    >No items found
                    </li>
                )}
            </ul>
        </div>
    );
};

export default SearchItem;