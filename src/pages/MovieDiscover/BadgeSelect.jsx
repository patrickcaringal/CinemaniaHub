import { useState, memo } from "react";
import { Badge } from "react-bootstrap";
import { movieGenre, tvGenre } from "../../services/data/genres";

const BadgeSelect = memo(() => {
  const data = tvGenre;

  const [selected, setSelected] = useState([]);

  const onSelect = (id) => {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((i) => i !== id);
      return [...prev, id];
    });
  };

  return (
    <div style={{ maxWidth: 500 }}>
      <div className="d-inline-flex gap-2 flex-wrap">
        {data.map((i) => {
          return (
            <Badge
              className="user-select-none"
              key={i.id}
              pill
              bg={selected.includes(i.id) ? "primary" : "secondary"}
              onClick={() => onSelect(i.id)}
              style={{
                cursor: "pointer",
              }}
            >
              {i.name}
            </Badge>
          );
        })}
      </div>
    </div>
  );
});

BadgeSelect.displayName = "BadgeSelect";
export default BadgeSelect;
