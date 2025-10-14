import { Card, Form, Row, Col } from "react-bootstrap";
function Filter({ onSearch, onFilter, onSort }) {
    return (
        <Card className="bg-dark text-light mb-3 p-3 shadow-sm border-1 border-secondary">
            <Row className="g-3">
                <Col md={4}>
                    <Form.Control
                        type="text"
                        placeholder="Search by title or description..."
                        onChange={(e) => onSearch(e.target.value)}
                    />
                </Col>
                <Col md={4}>
                    <Form.Select
                        onChange={(e) => onFilter(e.target.value)}
                    >
                        <option value="">Filter by Year</option>
                        <option value="<=2000">Before 2000</option>
                        <option value="2001-2015">2001-2015</option>
                        <option value=">2015">After 2015</option>
                    </Form.Select>
                </Col>
                <Col md={3}>
                    <Form.Select
                        onChange={(e) => onSort(e.target.value)}
                    >
                        <option value="">Sort by</option>
                        <option value="year-asc">Year Ascending</option>
                        <option value="year-desc">Year Descending</option>
                        <option value="title-asc">Title A-Z</option>
                        <option value="title-desc">Title Z-A</option>
                        <option value="duration-asc">Duration Ascending</option>
                        <option value="duration-desc">Duration Descending</option>
                    </Form.Select>
                </Col>
            </Row>
        </Card>
    );
}
export default Filter;