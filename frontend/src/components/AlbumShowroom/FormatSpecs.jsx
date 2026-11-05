export default function FormatSpecs({ album }) {
  const specifications = [
    ['Binding', album.binding],
    ['Paper', album.paperType],
    ['Finish', album.finishing],
    ['Materials', album.materials.join(', ')],
    ['Sizes', album.sizes.map(size => size.name).join(' · ')]
  ];

  return (
    <dl className="format-specs">
      {specifications.map(([label, value]) => (
        <div key={label}>
          <dt>{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}
