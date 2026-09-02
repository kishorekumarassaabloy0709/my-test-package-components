export interface Ticket {
    id: string;
    objectType: string;
    subject: string;
    status: string;
    modifiedBy: string;
    modifiedOn: string;
}
export interface CardProps {
    /** API endpoint for listing and creating tickets. Defaults to `/api/tickets`. */
    ticketsApiUrl?: string;
    className?: string;
}
export declare function Card({ ticketsApiUrl, className }: CardProps): import("react").JSX.Element;
export declare namespace Card {
    var displayName: string;
}
export default Card;
//# sourceMappingURL=Card.d.ts.map