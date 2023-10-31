import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Layout from '../layout';

export default function Page() {
    return (
        <div>
            <h1>
                New Yooser Page
            </h1>
        </div>
        // <Layout>
        //     <Form>
        //         <Row className='mb-3'>
        //             <Form.Group as={Col} controlId='formGridEmail'>
        //                 <Form.Label>Email</Form.Label>
        //                 <Form.Control type="email" placeholder='Enter email'/>
        //             </Form.Group>
        //         </Row>
        //     </Form>
        // </Layout>
    );
}