export default function Connexion() {
  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="submit">Se connecter</button>
        <button type="button" onClick={() => alert("Mot de passe oublié?")}>
          Mot de passe oublié?
        </button>
        <button type="button" onClick={() => alert("Créer un compte")}>
          Créer un compte
        </button>
      </form>
    </div>
  );
}
