import { MdMoreHoriz , MdSend } from 'react-icons/md';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import cls from './MessagesPage.module.scss';
import { HStack, VStack } from '@/shared/ui/Stack';
import AvatarImage from '@/shared/assets/images/avatar.png';
import { Text } from '@/shared/ui/Text';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import { Input } from '@/shared/ui/Input';

const MessagesPage = () => {
    const handleOpenMore = () => {
        console.log('Open More Options');
    };

    const handleSendMessage = () => {
        console.log('Send Message');
    };

    return (
        <div className={classNames(cls.MessagesPage, {})}>
            <Card
                padding="0"
                className={cls.usersWrapper}
            >
                <VStack
                    max
                    gap="0"
                >
                    {[
                        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                        17, 18, 19, 20,
                    ].map((item) => (
                        <HStack
                            gap="8"
                            key={item}
                            className={cls.userListItem}
                        >
                            <Avatar
                                width={40}
                                height={40}
                                src={AvatarImage}
                            />
                            <div>
                                <Text
                                    text="makushenkoao"
                                    bold
                                />
                                <Text
                                    text="Hello!"
                                    size="s"
                                    className={cls.messageText}
                                />
                            </div>
                        </HStack>
                    ))}
                </VStack>
            </Card>
            <Card
                padding="0"
                max
                className={cls.chatWrapper}
            >
                <HStack
                    max
                    justify="between"
                    className={cls.chatHeader}
                >
                    <HStack gap="8">
                        <Avatar
                            width={40}
                            height={40}
                            src={AvatarImage}
                        />
                        <Text
                            text="makushenkoao"
                            bold
                        />
                    </HStack>
                    <Icon
                        svg={MdMoreHoriz}
                        className={cls.moreIcon}
                        width={30}
                        height={30}
                        clickable
                        onClick={handleOpenMore}
                    />
                </HStack>
                <div className={cls.chatContent}>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Culpa, delectus dolor doloremque eaque fuga fugit,
                        harum magnam minus molestias nemo nobis vitae?
                        Consequatur dolorem ea eaque eos incidunt repellat sunt.
                    </div>
                    <div>
                        Accusamus aperiam autem dolore ea eum eveniet
                        exercitationem facere facilis impedit inventore mollitia
                        nam nemo quae quaerat, quis rem totam ut voluptates?
                        Atque dolore eaque enim hic pariatur possimus provident.
                    </div>
                    <div>
                        Esse, similique tenetur. A ad animi aperiam, at commodi
                        consequatur culpa deserunt dolorem eius eligendi,
                        inventore ipsa necessitatibus perspiciatis praesentium
                        quibusdam quos repellendus, rerum sapiente sed ullam
                        veritatis vitae voluptas!
                    </div>
                    <div>
                        Ab alias aspernatur consequuntur cumque debitis dolore
                        dolorem dolorum, earum enim esse est expedita fugiat id
                        libero magnam molestias nobis nostrum nulla odit,
                        perspiciatis possimus quaerat quam qui quisquam
                        similique.
                    </div>
                    <div>
                        A accusamus aliquam at, culpa cupiditate debitis,
                        delectus deserunt dolore dolorum eum facere impedit
                        iusto labore laborum necessitatibus nemo nihil nulla
                        obcaecati officiis quaerat quidem quisquam, rerum
                        suscipit vel voluptatem!
                    </div>
                    <div>
                        Accusamus accusantium architecto assumenda at atque
                        consequatur consequuntur, dicta dolor dolorem dolorum
                        ducimus earum enim, est id laboriosam laborum odio
                        provident quibusdam quos repellendus similique sunt
                        tempora, tempore voluptas voluptatibus?
                    </div>
                    <div>
                        Corporis facere magnam maiores quos repellat similique,
                        ullam! Aliquid animi aperiam commodi enim et ex facere
                        labore, maiores nihil nulla officia placeat quasi
                        suscipit temporibus totam ullam vel vero voluptatem?
                    </div>
                    <div>
                        Ad distinctio, ex excepturi id inventore ipsam iure
                        labore laborum minus neque, odio officiis optio placeat
                        possimus provident quam quidem quisquam rem
                        reprehenderit repudiandae rerum, saepe similique tempora
                        temporibus voluptatum.
                    </div>
                    <div>
                        A aliquam aspernatur, dignissimos, dolorem dolores fugit
                        nihil quaerat quas quidem recusandae repellendus unde
                        voluptate voluptatibus. Architecto, cumque esse illo
                        nisi obcaecati porro similique sunt suscipit tenetur
                        ullam vitae voluptatibus?
                    </div>
                    <div>
                        Ad aliquid facere iusto, minima minus nesciunt omnis
                        quia ratione sint. Cum deleniti dicta doloribus, ducimus
                        earum eos esse fugit natus placeat porro praesentium
                        quos repudiandae sed tempora temporibus voluptates.
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Aut dignissimos neque nihil numquam possimus.
                        Impedit labore nam nostrum tenetur veniam. Corporis cum
                        doloremque, eligendi inventore odio quasi voluptatem.
                        At, nisi.
                    </div>
                    <div>
                        Enim, illo, pariatur? At blanditiis culpa cupiditate
                        dolore esse eveniet inventore itaque laboriosam nam
                        necessitatibus neque nesciunt nisi quibusdam ullam,
                        velit! Atque quibusdam repudiandae sint velit. Minus
                        numquam quia quod!
                    </div>
                    <div>
                        Amet, aspernatur consequatur corporis culpa cum,
                        delectus distinctio ea, eum expedita inventore ipsa
                        ipsum iste laudantium mollitia non officia possimus
                        praesentium quae reiciendis rerum saepe sequi voluptatem
                        voluptatibus. Ad, rerum.
                    </div>
                    <div>
                        Ad alias aliquam aspernatur consequatur deserunt
                        distinctio dolor error eum eveniet explicabo illo ipsa
                        iste laudantium modi molestias natus nihil nobis nulla
                        praesentium provident quia repudiandae sed sequi sint,
                        veniam?
                    </div>
                    <div>
                        Adipisci alias architecto blanditiis deserunt distinctio
                        eos et, ex fugit ipsa iste nemo nobis, nostrum nulla
                        obcaecati officia officiis perspiciatis quaerat quas,
                        quidem quod sapiente similique vel velit voluptatibus
                        voluptatum.
                    </div>
                    <div>
                        Expedita itaque minus odio omnis rem! Consequatur cum
                        cupiditate, deleniti dolores excepturi ipsam iste,
                        minima nam quo repellendus reprehenderit suscipit
                        temporibus ullam. Dolore, non rerum? Dolor ea modi odio
                        sunt!
                    </div>
                    <div>
                        Accusamus aliquid amet hic maxime, obcaecati quos rem
                        sequi sit totam voluptatem. Amet assumenda, doloremque
                        ipsum iure nihil optio! Adipisci eaque et itaque minima
                        neque nesciunt nisi numquam quis voluptatum!
                    </div>
                    <div>
                        Delectus eligendi facere fugit ipsum laborum maxime modi
                        necessitatibus, non possimus quaerat quia reprehenderit
                        tempora voluptatem! Accusantium alias aperiam dolor
                        eaque enim inventore minus nostrum quidem, quos sit?
                        Deleniti, vitae.
                    </div>
                    <div>
                        Et nisi optio reprehenderit rerum, ullam veritatis
                        voluptate. A aliquid amet dignissimos et, facilis nobis
                        obcaecati omnis quia tempore totam vitae voluptatibus?
                        Consectetur delectus deserunt eum molestias
                        necessitatibus numquam quae?
                    </div>
                    <div>
                        Accusamus beatae dolorem dolores ea earum eos illum
                        incidunt, iure libero magnam molestiae nam neque non
                        perferendis quaerat quia reprehenderit sint suscipit
                        totam unde ut vel vero. Ea, enim veniam.
                    </div>
                </div>
                <HStack
                    max
                    gap="16"
                    className={cls.chatFooter}
                >
                    <Input placeholder="Enter Message" />
                    <Icon
                        svg={MdSend}
                        className={cls.icon}
                        width={40}
                        height={40}
                        clickable
                        onClick={handleSendMessage}
                    />
                </HStack>
            </Card>
        </div>
    );
};
export default MessagesPage;
