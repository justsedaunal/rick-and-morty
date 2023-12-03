import { useRouter } from "next/router";
import { useGetCharacterQuery } from "../../redux/slices/locations";
import Link from "next/link";

const CharacterDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: character, error, isLoading } = useGetCharacterQuery(id);

  if (isLoading) {
    return <p>Loading character details...</p>;
  }

  if (error) {
    return <p>Error loading character details: {error.message}</p>;
  }

  return (
    <>
      <Link href="/">anasayfa</Link>
      <div>
        <h1>{character.name}</h1>
      </div>
    </>
  );
};

export default CharacterDetails;
