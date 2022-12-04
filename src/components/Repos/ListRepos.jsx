import React from 'react';

const ListRepos = (props) => {
    return (
        <table className="border">
            <tr className="border">
                <th className="border">ID</th>
                <th className="border">Name</th>
                <th className="border">URL</th>
            </tr>
            {props?.repos.map((repo) => (
                <tr className="border">
                    <td className="border p-2">{repo.id}</td>
                    <td className="border p-2">{repo.name}</td>
                    <td className="border p-2">{repo.html_url}</td>
                </tr>
            ))}
        </table>
    );
};

export default ListRepos;
