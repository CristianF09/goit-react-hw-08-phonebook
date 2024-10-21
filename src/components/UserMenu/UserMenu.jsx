import PropTypes from 'prop-types';
import styles from './UserMenu.module.css';

const UserMenu = ({ email, onLogout }) => (
  <div className={styles.userMenu}>
    <p>{email}</p>
    <button onClick={onLogout}>Logout</button>
  </div>
);

UserMenu.propTypes = {
  email: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;