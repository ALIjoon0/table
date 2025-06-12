
export default function Row({ name, last, no , age , img}) {
  return (
    <tr>
      
      <td>{name}</td>
      <td>{last}</td>
      <td>{no}</td>
      <td>{age}</td>
      <td><img src={img}  /></td>
      </tr>
  );
}
