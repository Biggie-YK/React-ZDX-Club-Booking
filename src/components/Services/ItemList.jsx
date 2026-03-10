export default function ItemList({ Items }) {
  return (
    <ul className="px-1 px-md-2 lh-base lh-md-lg list-unstyled">
      {Items.map((item, index) => (
        <li key={index} className="d-flex mb-0">
          <i className="bi bi-dot flex-shrink-0"></i>
          {item}
        </li>
      ))}
    </ul>
  );
}
