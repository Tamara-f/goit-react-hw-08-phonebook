import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    marginRight: '10px',
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img style={styles.img} src={avatar} alt="" width="32" />
    <span> Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar:
    'https://cdn.pixabay.com/photo/2014/04/02/14/10/female-306407_960_720.png',
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
