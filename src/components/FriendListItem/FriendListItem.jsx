import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.FriendListItemWrapper}>
      <img
        className={css.FriendListItemImg}
        src={avatar}
        alt="Avatar image"
        width="48"
      />
      <p className={css.FriendListItemName}>{name}</p>
      <p className={css[isOnline]}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

export default FriendListItem;
