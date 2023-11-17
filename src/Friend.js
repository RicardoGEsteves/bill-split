import { Button } from "./Button";

export function Friend({ friendData, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friendData.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friendData.image} alt={friendData.name} />
      <h3>{friendData.name}</h3>
      {friendData.balance < 0 && (
        <p className="red">
          You owe {friendData.name} {Math.abs(friendData.balance)}€
        </p>
      )}
      {friendData.balance > 0 && (
        <p className="green">
          {friendData.name} owes you {Math.abs(friendData.balance)}€
        </p>
      )}
      {friendData.balance === 0 && <p>You and {friendData.name} are even</p>}

      <Button onClick={() => onSelection(friendData)}>
        {isSelected ? "Closed" : "Select"}
      </Button>
    </li>
  );
}
