type HeaderType = {
  title: string;
};

export function Header({title}: HeaderType) {

  return (
    <>
      <header className="main-header">
        <h1 className="main-title">{title}</h1>
      </header>
    </>
  );
}
