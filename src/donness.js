import { create } from 'zustand'

export const useAppStore = create((set) => ({
    isConnecte: false,
    setIsConnecte : (newIsConnecte)=>set({isConnecte : newIsConnecte}),
    User: {
        Email:"leocomte@gmail.com",
        Nom: "Comte",
        Prenom : "Leo",
        DateNaissance : "01-05-2001",
        Ville: "Bagneux",
        Pays: "France",
        CoordonnéesBancaires: "1234 1234 1234 1234",
        photo: '../../images/photo_profil.png',
    },
    CreationAnnonce:{
        paysDepart: "",
        villeArrivee: "",
        photo: "",
        poids: "",
        titre: "",
        description: "",
        prixAchats: "",
        devise: "",
        besoinAcheteur: false,
        besoinVoyageur: false,
    },
    setCreationAnnonce: (newAnnonce) => set({CreationAnnonce : newAnnonce}),
    updateTest: (newTest)=> set({test: newTest})
  }));