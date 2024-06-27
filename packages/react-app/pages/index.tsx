import PrimaryButton from "@/components/Button";
import { useEffect, useState } from "react";
import { useWeb3 } from "@/contexts/useWeb3";
import ImgSectionOne from '@/images/background/sectionOne.jpeg';
import HatchbackImage from '@/images/hatchback.png';
import SedanImage from '@/images/seden.png';
import BakkieImage from '@/images/bakkie.png';
import LandRoverImage from '@/images/land-rover.png';

export default function Home() {
    const {
        address, 
        getUserAddress,
        sendCUSD,
        mintMinipayNFT,
        getNFTs,
        signTransaction,
    } = useWeb3();
    const [cUSDLoading, setCUSDLoading] = useState(false);
    const [nftLoading, setNFTLoading] = useState(false);
    const [signingLoading, setSigningLoading] = useState(false);
    const [userOwnedNFTs, setUserOwnedNFTs] = useState<string[]>([]);
    const [tx, setTx] = useState<any>(undefined);

    useEffect(() => {
        getUserAddress();
    }, []);

    useEffect(() => {
        const getData = async () => {
            const tokenURIs = await getNFTs();
            setUserOwnedNFTs(tokenURIs);
        };
        if (address) {
            getData();
        }
    }, [address]);

    async function sendingCUSD() {
        if (address) {
            setCUSDLoading(true);
            try {
                const tx = await sendCUSD(address, "0.1");
                setTx(tx);
            } catch (error) {
                console.log(error);
            } finally {
                setCUSDLoading(false);
            }
        }
    }

    async function signMessage() {
        setSigningLoading(true);
        try {
            await signTransaction();
        } catch (error) {
            console.log(error);
        } finally {
            setSigningLoading(false);
        }
    }

    async function mintNFT() {
        setNFTLoading(true);
        try {
            await mintMinipayNFT();
        } catch (error) {
            console.log(error);
        } finally {
            setNFTLoading(false);
        }
    }

    return (
        <div className="home">
            <div className="section-one">
                <div className="container-one">
                    <img className="land-rover-image" src={LandRoverImage.src} alt="Land Rover" />
                    <h1><strong>Piston Car Rental</strong></h1>
                    <h2>Experience luxury and adventure with our top-notch Land Rover rentals.</h2>
                </div>
            </div>

            <div className="section-two">
                <div className="container-two">
                    <h1>BOOK A CAR WITH US</h1>
                    <p>Quick & easy car rental with Celo, offering seamless booking, 
                        affordable rates, and a wide selection of vehicles to meet all your travel needs
                    </p>
                </div>
            </div>

            <div className="section-three">
                <h1>WHAT DO WE OFFER</h1>
                <p className="paragraph">We offer a variety of car types to meet all your travel needs. Choose from our selection of hatchbacks, sedans, and bakkies. Each car is well-maintained and ready to provide a comfortable and reliable ride.</p>
                <div className="car-offers">
                    <div className="car-item">
                        <img className="car-image" src={HatchbackImage.src} alt="Hatchback" />
                        <button>Rent Hatchback</button>
                    </div>
                    <div className="car-item">
                        <img className="car-image" src={SedanImage.src} alt="Sedan" />
                        <button>Rent Sedan</button>
                    </div>
                    <div className="car-item">
                        <img className="car-image" src={BakkieImage.src} alt="Bakkie" />
                        <button>Rent Bakkie</button>
                    </div>
                </div>
            </div>

            <div className="section-four">
                <div className="container-three">
                    <h1>UNLOCK BENEFITS AND REWARDS</h1>
                    <p className="paragraph">Quick & easy car rental with Celo, offering seamless booking, 
                        affordable rates, and a wide selection of vehicles to meet all your travel needs. 
                        Join our loyalty program and save! As a Piston Car Rental member, you can earn points and spend them on future rentals.
                    </p>
                </div>
            </div>
        </div>
    );
}
