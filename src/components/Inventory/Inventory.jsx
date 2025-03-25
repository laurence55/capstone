import React, { useState } from 'react';
import styled from '@emotion/styled';
import Sidebar from '../Dashboard/Sidebar';

const PageContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f8fafc;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.div`
  h1 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: #666;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 0.75rem;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  font-size: 1rem;

  &::placeholder {
    color: #94a3b8;
  }
`;

const TabList = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e2e8f0;
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  background: none;
  border: none;
  font-size: 0.95rem;
  color: ${props => props.active ? '#1e40af' : '#64748b'};
  border-bottom: 2px solid ${props => props.active ? '#1e40af' : 'transparent'};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: #1e40af;
  }
`;

const Table = styled.table`
  width: 100%;
  background: white;
  border-radius: 0.5rem;
  border-collapse: collapse;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  text-align: left;
  padding: 1rem;
  color: #1e40af;
  font-weight: 500;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;

  &:first-of-type {
    border-top-left-radius: 0.5rem;
  }

  &:last-of-type {
    border-top-right-radius: 0.5rem;
  }
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
  color: #1a1a1a;
`;

const StatusIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${props => {
      switch (props.status) {
        case 'In Stock':
          return '#22c55e';
        case 'Low Stock':
          return '#eab308';
        case 'Out of Stock':
          return '#ef4444';
        default:
          return '#94a3b8';
      }
    }};
  }
`;

const LastUpdated = styled.span`
  color: #64748b;
  font-size: 0.9rem;
`;

const Inventory = () => {
  const [activeTab, setActiveTab] = useState('List');
  const [searchQuery, setSearchQuery] = useState('');
  
  const supplies = [
    {
      id: 1,
      name: 'White BoardMarker',
      quantity: '100 pcs',
      status: 'In Stock',
      lastUpdated: '2 days Ago'
    },
    {
      id: 2,
      name: 'Printer Paper',
      quantity: '10 pcs',
      status: 'Low Stock',
      lastUpdated: '1 days Ago'
    },
    {
      id: 3,
      name: 'Microscope',
      quantity: '0 pcs',
      status: 'Out of Stock',
      lastUpdated: '3 days Ago'
    },
    {
      id: 4,
      name: 'Ballpoint Pens',
      quantity: '200 pcs',
      status: 'In Stock',
      lastUpdated: '1 day Ago'
    },
    {
      id: 5,
      name: 'Staplers',
      quantity: '5 pcs',
      status: 'Low Stock',
      lastUpdated: '4 days Ago'
    }
  ];

  const tabs = ['List', 'Recently Added', 'Most Needed', 'Lowest Stock'];

  // Filter supplies based on search query
  const filteredSupplies = supplies.filter(supply =>
    supply.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <PageContainer>
      <Sidebar />
      <MainContent>
        <Header>
          <Title>
            <h1>Inventory Overview</h1>
            <p>Check Available Supplies and Stay Updated on Stock Levels</p>
          </Title>
        </Header>

        <SearchBar 
          placeholder="Browse Supplies..." 
          value={searchQuery}
          onChange={handleSearch}
        />

        <TabList>
          {tabs.map(tab => (
            <Tab
              key={tab}
              active={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <Table>
          <thead>
            <tr>
              <Th>Supply Name</Th>
              <Th>Quantity</Th>
              <Th>Status</Th>
              <Th>Last Updated</Th>
            </tr>
          </thead>
          <tbody>
            {filteredSupplies.map(supply => (
              <tr key={supply.id}>
                <Td>{supply.name}</Td>
                <Td>{supply.quantity}</Td>
                <Td>
                  <StatusIndicator status={supply.status}>
                    {supply.status}
                  </StatusIndicator>
                </Td>
                <Td>
                  <LastUpdated>{supply.lastUpdated}</LastUpdated>
                </Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </MainContent>
    </PageContainer>
  );
};

export default Inventory; 