import React, { useEffect, useState } from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import SearchBar from "./components/Search/SearchBar";

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [query, setQuery] = useState("");

  useEffect(() => {
    calculateFinances(transactionsList);
    setProductCount(transactionsList.length);
  }, [transactionsList]);

  const calculateFinances = (transactions) => {
    const amountExpense = transactions
      .filter((item) => item.expense)
      .map((transaction) => Number(transaction.amount));
    const amountIncome = transactions
      .filter((item) => !item.expense)
      .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  };

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  const filteredTransactions = transactionsList.filter((transaction) => {
    return transaction.desc
      ? transaction.desc.toLowerCase().includes(query.toLowerCase())
      : false;
  });

  return (
    <>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Resume income={income} expense={expense} total={total} productCount={productCount} />
      <Form
        handleAdd={handleAdd}
        transactionsList={query ? filteredTransactions : transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </>
  );
};

export default App;
