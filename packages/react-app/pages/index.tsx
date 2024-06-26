import PrimaryButton from "@/components/Button";
import { useEffect, useState } from "react";
import { useWeb3 } from "@/contexts/useWeb3";
import Cars from '@/components/images';
import ImgSectionOne from '@/images/background/sectionOne.jpeg';

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
                    <h1>BOOK A CAR WITH US</h1>
                    <h2>Quick & easy car rental with Celo, offering seamless booking, 
                        affordable rates, and a wide selection of vehicles to meet all your travel needs
                    </h2>
                </div>
            </div>
            
            <div className="section-two">
                <div className="container-two">
                    <h1>UNLOCK BENEFITS AND REWARDS</h1>
                    <p className="paragraph">Quick & easy car rental with Celo, offering seamless booking, 
                        affordable rates, and a wide selection of vehicles to meet all your travel needs. 
                        Join our loyalty program and save! As a Piston Car Rental member, you can earn points and spend them on future rentals.
                    </p>
            </div>
                {/* <div className="why-us">
                    <h1>Why choose us?</h1>
                    <h3>Best valued deals you will ever find</h3>
                    <p className="paragraph">We offer the best services in the industry. 
                        Our vehicles are well maintained and our prices are unbeatable.
                    </p>
                </div> */}
            </div>
        </div>
    );
}