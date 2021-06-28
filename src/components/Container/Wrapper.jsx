import React from "react";
import { Container, Title } from "./Wrapper.styles";

import user from "../../data/user.json";
import stats from "../../data/statistical-data.json";
import friends from "../../data/friends.json";
import transactions from "../../data/transactions.json";

import Profile from "../Profile/Profile";
import Statistics from "../Statistica/Statistika";
import Friends from "../Friends/Friends";
import TransactionHistory from "../Transaction/TransactionHistory";

const Wrapper = () => {
  return (
    <Container>
      <Title>Задание 1 - Профиль социальной сети</Title>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Title>Задание 2 - Секция статистики</Title>
      <Statistics title="Upload stats" stats={stats} />;
      <Title>Задание 3 - Список друзей</Title>
      <Friends friends={friends} />,
      <Title>Задание 4 - История транзакций</Title>
      <TransactionHistory items={transactions} />;
    </Container>
  );
};

export default Wrapper;
