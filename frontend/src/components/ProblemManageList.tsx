import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { StyledHeaderText } from '../styles/StyledText';

type ProblemManageListProps = {
    data: { id: number; title: string }[];
};

const ProblemManageList: React.FC<ProblemManageListProps> = ({ data }) => {
    return (
        <div>
            <StyledHeaderText>Problem Manage List</StyledHeaderText>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th className="text-center">#</th>
                        <th className="text-center">Problem Title</th>
                        <th className="text-center">Menu</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((problem, index) => (
                        <tr key={problem.id}>
                            <td className="text-center">{index + 1}</td>
                            <td className="text-center">{problem.title}</td>
                            <td className="text-center">
                                <Button className="mx-2">Edit</Button>
                                <Button className="btn-danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ProblemManageList;
