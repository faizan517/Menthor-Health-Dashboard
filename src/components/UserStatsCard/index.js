import React from 'react';
import { FaUsers, FaUser } from 'react-icons/fa'; // Icons for total users and members

const UserStatsCard = ({}) => {
  // Styles as JS objects
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: '20px 30px',
      borderRadius: '12px',
      boxShadow: '4px 4px 15px 15px rgba(0, 0, 0, 0.05)',
      margin: '20px auto',
    },
    section: {
      display: 'flex',
      alignItems: 'center',
    },
    iconCircle: {
      backgroundColor: '#EAF8F7',
      borderRadius: '50%',
      padding: '15px',
      marginRight: '15px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    statsDetails: {
      display: 'flex',
      flexDirection: 'column',
    },
    statTitle: {
      margin: 0,
      fontSize: '14px',
      color: '#9C9C9C',
    },
    statValue: {
      margin: 0,
      fontSize: '24px',
      fontWeight: 'bold',
    },
    statChange: {
      fontSize: '12px',
      color: '#9C9C9C',
    },
    positiveChange: {
      color: '#4CAF50', // Green for positive change
    },
    negativeChange: {
      color: '#F44336', // Red for negative change
    },
    divider: {
      width: '1px',
      height: '50px',
      backgroundColor: '#F0F0F0',
    },
  };
  const stats = [
    {
      title: 'Total Users',
      value: 5423,
      change: 16, // Positive change
      icon: 'users',
    },
    {
      title: 'Members',
      value: 1893,
      change: -1, // Negative change
      icon: 'user',
    },
  ];

  return (
    <div style={styles.container}>
      {stats.map((stat, index) => (
        <React.Fragment key={index}>
          <div style={styles.section}>
            <div style={styles.iconCircle}>
              {stat.icon === 'users' ? (
                <FaUsers size={30} color="#A6DBD9" />
              ) : (
                <FaUser size={30} color="#A6DBD9" />
              )}
            </div>
            <div style={styles.statsDetails}>
              <p style={styles.statTitle}>{stat.title}</p>
              <h2 style={styles.statValue}>{stat.value}</h2>
              <span
                style={{
                  ...styles.statChange,
                  ...(stat.change > 0 ? styles.positiveChange : styles.negativeChange),
                }}
              >
                {stat.change > 0 ? `▲ ${stat.change}% this month` : `▼ ${Math.abs(stat.change)}% this month`}
              </span>
            </div>
          </div>
          {index !== stats.length - 1 && <div style={styles.divider} />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default UserStatsCard;
