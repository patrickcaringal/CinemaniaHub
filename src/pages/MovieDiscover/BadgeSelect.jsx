import { memo } from "react";
import { Badge } from "react-bootstrap";
import { movieGenre, tvGenre } from "../../services/data/genres";

const BadgeSelect = memo(({ selected = [], onSelect }) => {
  const data = movieGenre;

  return (
    <div>
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
