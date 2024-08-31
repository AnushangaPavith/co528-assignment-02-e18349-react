function RadioButtons({ angle, onChange }) {
  return (
    <div className="radio-buttons">
      {[0, 45, 60, 90, 180].map((value) => (
        <label key={value}>
          <input
            type="radio"
            name="angle"
            value={value}
            checked={angle === value}
            onChange={onChange}
          />
          {value}°
        </label>
      ))}
    </div>
  );
}
