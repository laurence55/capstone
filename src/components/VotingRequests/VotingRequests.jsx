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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
`;

const SuppliesSection = styled.div``;

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RequestButton = styled.button`
  background: #4834d4;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: #372aaa;
  }
`;

const SuppliesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
`;

const SupplyCard = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .votes {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  .actions {
    display: flex;
    gap: 0.5rem;
  }
`;

const VoteButton = styled.button`
  flex: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  cursor: pointer;
  background: ${props => props.primary ? '#4834d4' : '#e2e8f0'};
  color: ${props => props.primary ? 'white' : '#1a1a1a'};

  &:hover {
    background: ${props => props.primary ? '#372aaa' : '#cbd5e1'};
  }
`;

const RequestsSection = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const RequestsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const RequestCard = styled.div`
  background: #f8fafc;
  padding: 1rem;
  border-radius: 0.5rem;

  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  .details {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 0.5rem;
  }

  .status {
    display: inline-block;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.8rem;
    background: ${props => {
      switch (props.status) {
        case 'pending':
          return '#fef3c7';
        case 'approved':
          return '#dcfce7';
        default:
          return '#f1f5f9';
      }
    }};
    color: ${props => {
      switch (props.status) {
        case 'pending':
          return '#92400e';
        case 'approved':
          return '#166534';
        default:
          return '#475569';
      }
    }};
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 500;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4834d4;
    box-shadow: 0 0 0 2px rgba(72, 52, 212, 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.375rem;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #4834d4;
    box-shadow: 0 0 0 2px rgba(72, 52, 212, 0.1);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.9rem;
  cursor: pointer;
  background: ${props => props.primary ? '#4834d4' : '#e2e8f0'};
  color: ${props => props.primary ? 'white' : '#1a1a1a'};

  &:hover {
    background: ${props => props.primary ? '#372aaa' : '#cbd5e1'};
  }
`;

const VotingRequests = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newRequest, setNewRequest] = useState({
    itemName: '',
    quantity: '',
    reason: '',
    urgency: 'normal'
  });

  const officeSupplies = [
    {
      id: 1,
      name: 'Whiteboard Markers (Assorted Colors)',
      votes: 98
    },
    {
      id: 2,
      name: 'Printer Ink (Black & Color)',
      votes: 85
    },
    {
      id: 3,
      name: 'Bond Paper (A4, Short, Long)',
      votes: 120
    },
    {
      id: 4,
      name: 'Ballpoint Pens (Blue, Black, Red)',
      votes: 75
    },
    {
      id: 5,
      name: 'Highlighters (Neon Pack)',
      votes: 45
    },
    {
      id: 6,
      name: 'Correction Tape',
      votes: 90
    },
    {
      id: 7,
      name: 'Sticky Notes (Assorted Colors)',
      votes: 60
    },
    {
      id: 8,
      name: 'Folders & Envelopes (Plastic & Manila)',
      votes: 45
    },
    {
      id: 9,
      name: 'Graphing Paper (Math & Engineering)',
      votes: 35
    }
  ];

  const requests = [
    {
      id: 1,
      item: 'Graphing Calculators',
      requestedBy: 'David Chen',
      date: '2024-03-20',
      status: 'pending'
    },
    {
      id: 2,
      item: 'Water Color Set',
      requestedBy: 'Maria Garcia',
      date: '2024-03-19',
      status: 'pending'
    },
    {
      id: 3,
      item: 'Stopwatches & Whistles',
      requestedBy: 'John Smith',
      date: '2024-03-18',
      status: 'awaiting'
    },
    {
      id: 4,
      item: 'Book Stands',
      requestedBy: 'Sarah Lee',
      date: '2024-03-17',
      status: 'approved'
    },
    {
      id: 5,
      item: 'USB Flash Drive 32GB',
      requestedBy: 'Robert Kim',
      date: '2024-03-16',
      status: 'approved'
    }
  ];

  const filteredSupplies = officeSupplies.filter(supply =>
    supply.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleRequestChange = (e) => {
    const { name, value } = e.target;
    setNewRequest(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    // Here you would typically send the request to your backend
    console.log('New request submitted:', newRequest);
    // Reset form and close modal
    setNewRequest({
      itemName: '',
      quantity: '',
      reason: '',
      urgency: 'normal'
    });
    setShowModal(false);
  };

  return (
    <PageContainer>
      <Sidebar />
      <MainContent>
        <Header>
          <Title>
            <h1>Voting and Requests Page</h1>
            <p>Vote for needed supplies, request new items, and track approvals.</p>
          </Title>
          <RequestButton onClick={() => setShowModal(true)}>
            <span>+</span> Request New Supply
          </RequestButton>
        </Header>

        <SearchBar 
          placeholder="Browse Supplies..." 
          value={searchQuery}
          onChange={handleSearch}
        />

        <ContentGrid>
          <SuppliesSection>
            <CategoryTitle>
              Office Supplies
            </CategoryTitle>
            <SuppliesGrid>
              {filteredSupplies.map(supply => (
                <SupplyCard key={supply.id}>
                  <h3>{supply.name}</h3>
                  <div className="votes">{supply.votes} votes</div>
                  <div className="actions">
                    <VoteButton>Vote</VoteButton>
                    <VoteButton primary>Request</VoteButton>
                  </div>
                </SupplyCard>
              ))}
            </SuppliesGrid>
          </SuppliesSection>

          <RequestsSection>
            <h2>Requests</h2>
            <RequestsList>
              {requests.map(request => (
                <RequestCard key={request.id} status={request.status}>
                  <h3>{request.item}</h3>
                  <div className="details">
                    Requested by: {request.requestedBy}
                  </div>
                  <div className="status">
                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                  </div>
                </RequestCard>
              ))}
            </RequestsList>
          </RequestsSection>
        </ContentGrid>

        {showModal && (
          <Modal>
            <ModalContent>
              <h2>Request New Supply</h2>
              <Form onSubmit={handleSubmitRequest}>
                <FormGroup>
                  <label htmlFor="itemName">Item Name</label>
                  <Input
                    type="text"
                    id="itemName"
                    name="itemName"
                    value={newRequest.itemName}
                    onChange={handleRequestChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="quantity">Quantity Needed</label>
                  <Input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={newRequest.quantity}
                    onChange={handleRequestChange}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <label htmlFor="reason">Reason for Request</label>
                  <TextArea
                    id="reason"
                    name="reason"
                    value={newRequest.reason}
                    onChange={handleRequestChange}
                    required
                  />
                </FormGroup>
                <ButtonGroup>
                  <Button type="button" onClick={() => setShowModal(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" primary>
                    Submit Request
                  </Button>
                </ButtonGroup>
              </Form>
            </ModalContent>
          </Modal>
        )}
      </MainContent>
    </PageContainer>
  );
};

export default VotingRequests; 