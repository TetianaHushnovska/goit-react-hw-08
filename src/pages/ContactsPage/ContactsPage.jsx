import { useDispatch, useSelector } from "react-redux";
import { selectLosding } from "../../redux/contacts/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLosding);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Yout contacts</title>
      <ContactForm />
      <SearchBox />
      <div>{isLoading && "Looking for contacts...👀"}</div>
      <ContactList />
    </>
  );
}
