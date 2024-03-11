import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { encodeFunctionData, formatEther, parseEther, parseGwei } from 'viem';
import { base } from 'viem/chains';
import type { FrameTransactionResponse } from '@coinbase/onchainkit/frame';
import { NEXT_PUBLIC_TRENDS_MARKET_ADDRESS } from '../../config';
import trendsMarketAbi from '@/abis/trends-market.abi';

async function getResponse(req: NextRequest): Promise<NextResponse | Response>
{
    const body: FrameRequest = await req.json();
    const { isValid } = await getFrameMessage(body, { neynarApiKey: 'NEYNAR_ONCHAIN_KIT' });

    if (!isValid)
    {
        return new NextResponse('Message not valid', { status: 500 });
    }

    const data = encodeFunctionData({
        abi: trendsMarketAbi,
        functionName: 'buyShares',
        args: ['Boeing', 1, '0x24929B32bEF196ea2E3D8E5F1B4E45b4928B73A3'],
    });


    const txData: FrameTransactionResponse = {
    chainId: `eip155:${base.id}`,
    method: 'eth_sendTransaction',
    params: {
        abi: [],
        data,
        to: NEXT_PUBLIC_TRENDS_MARKET_ADDRESS,
        value: parseGwei('10000').toString(), // 0.00001 ETH
    },
};
    return new NextResponse(
  )

}

export async function POST(req: NextRequest): Promise<Response>
{
    return getResponse(req);
}

export const dynamic = 'force-dynamic';
