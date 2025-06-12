import Row from "./Row.jsx";
import './Users.css';

export default function Users() {
  return (
    <table className="user-table">
      <thead>
        <tr>
        <th> نام کالا</th>
          <th>کد کالا</th>
          <th>قیمت</th>
          <th> تعداد </th>
          <th>عکس</th>
          
        </tr>
      </thead>
      <tbody>
        <Row  name="ساعت هوشمند" last="3473864 " no=" 3,765,000 تومان " age="2" img="watch.jpg"/>
        <Row  name="لپ تاپ" last="73947397 " no="69,200,000 تومان" age="1" img="lap.jpg"/>
        <Row  name="گوشی هوشمند" last="87986978 " no=" 44,400,000 4" age="999" img="mob.jpg"/>
        <Row  name="ایرپاد" last=" 12198212" no="1,000,000 تومان" age="12" img="air.jpg"/>
      </tbody>
    </table>
  );
}
